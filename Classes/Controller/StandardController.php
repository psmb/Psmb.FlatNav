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
     * @param string $preset The preset, configured in Settings.yaml
     * @param string $nodeContextPath The context path of the node that will be available as `node` context var in Eel
     * @param integer $page Page parameter used for pagination
     * @return void
     * @Flow\SkipCsrfProtection
     */
    public function queryAction($preset, $nodeContextPath, $page = 1)
    {
        if (!isset($this->presets[$preset])) {
            throw new \Exception('Invalid preset name');
        }
        $expression = '${' . $this->presets[$preset]['query'] . '}';
        $baseNode = $this->nodeService->getNodeFromContextPath($nodeContextPath, null, null, true);
        $contextVariables = [
            'node' => $baseNode,
            'page' => $page
        ];
        $nodes = \Neos\Eel\Utility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables, $this->defaultContextConfiguration);
        $nodeInfoHelper = new NodeInfoHelper();

        $result = [];
        foreach ($nodes as $node) {
            $nodeInfo = $nodeInfoHelper->renderNodeWithMinimalPropertiesAndChildrenInformation($node, $this->getControllerContext());
            $nodeInfo['properties']['_removed'] = $node->isRemoved();
            $result[] = $nodeInfo;
        }
        $this->view->assign('value', $result);
    }

    /**
     * @param string $preset The preset, configured in Settings.yaml
     * @param string $nodeContextPath The context path of the node that will be available as `node` context var in Eel
     * @param integer $page Page parameter used for pagination
     * @return void
     * @Flow\SkipCsrfProtection
     */
    public function getNewReferenceNodePathAction($preset, $nodeContextPath)
    {
        if (!isset($this->presets[$preset])) {
            throw new \Exception('Invalid preset name');
        }
        $expression = '${' . $this->presets[$preset]['newReferenceNodePath'] . '}';
        $baseNode = $this->nodeService->getNodeFromContextPath($nodeContextPath, null, null, true);
        $contextVariables = [
            'node' => $baseNode
        ];
        $newReferenceNodePath = \Neos\Eel\Utility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables, $this->defaultContextConfiguration);
        $this->view->assign('value', $newReferenceNodePath);
    }
}
