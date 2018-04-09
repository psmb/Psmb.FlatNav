<?php
namespace Psmb\FlatNav\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Neos\Ui\Fusion\Helper\NodeInfoHelper;
use Neos\Neos\Ui\ContentRepository\Service\NodeService;

class StandardController extends ActionController
{

    /**
     * @var array
     */
    protected $viewFormatToObjectNameMap = array(
        'html' => JsonView::class
    );

    /**
     * @Flow\Inject
     * @var NodeService
     */
    protected $nodeService;

    /**
     * @Flow\InjectConfiguration(package="Neos.Neos.Ui", path="frontendConfiguration.Psmb_FlatNav.presets")
     * @var array
     */
    protected $presets;

    /**
     * @Flow\InjectConfiguration(package="Neos.Fusion", path="defaultContext")
     * @var array
     */
    protected $defaultContextConfiguration;

    /**
     * @Flow\Inject
     * @var \Neos\Eel\EelEvaluatorInterface
     */
    protected $eelEvaluator;

    /**
     * @param string $preset
     * @param integer $page
     * @return void
     * @Flow\SkipCsrfProtection
     */
    public function queryAction($preset, $page = 1)
    {
        if (!isset($this->presets[$preset])) {
            throw new \Exception('Invalid preset name');
        }
        $expression = '${' . $this->presets[$preset]['query'] . '}';
        $baseNode = $this->nodeService->getNodeFromContextPath('/sites/site@user-dimaip;language=ru', null, null, true);
        $contextVariables = [
            'node' => $baseNode,
            'page' => $page
        ];
        $nodes = \Neos\Eel\Utility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables, $this->defaultContextConfiguration);
        $nodeInfoHelper = new NodeInfoHelper();
        $result = $nodeInfoHelper->renderNodes($nodes, $this->getControllerContext(), true);
        $this->view->assign('value', $result);
    }
}
