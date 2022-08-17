<?php
namespace Psmb\FlatNav\Controller;

use Neos\Eel\Utility;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Neos\Ui\Fusion\Helper\NodeInfoHelper;
use Neos\Neos\Ui\ContentRepository\Service\NodeService;

class StandardController extends ActionController
{
    /**
     * @var array
     */
    protected $viewFormatToObjectNameMap = [
        'html' => JsonView::class
    ];

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
     * @Flow\Inject(lazy=false)
     * @var \Neos\Eel\EelEvaluatorInterface
     */
    protected $eelEvaluator;

    /**
     * @param string $preset The preset, configured in Settings.yaml
     * @param string $nodeContextPath The context path of the node that will be available as `node` context var in Eel
     * @param integer $page Page parameter used for pagination
     * @param string $searchTerm Search term
     * @return void
     * @throws \Neos\Eel\Exception
     * @Flow\SkipCsrfProtection
     */
    public function queryAction($preset, $nodeContextPath, $page = 1, $searchTerm = null)
    {
        if (!isset($this->presets[$preset])) {
            throw new \Exception('Invalid preset name');
        }
        $isSearch = $searchTerm && $this->presets[$preset]['searchQuery'];
        if ($isSearch) {
            $expression = '${' . $this->presets[$preset]['searchQuery'] . '}';
        } else {
            $expression = '${' . $this->presets[$preset]['query'] . '}';
        }
        $baseNode = $this->nodeService->getNodeFromContextPath($nodeContextPath, null, null, true);
        if ($isSearch) {
            $contextVariables = [
                'node' => $baseNode,
                'page' => $page,
                'searchTerm' => $searchTerm
            ];
        } else {
            $contextVariables = [
                'node' => $baseNode,
                'page' => $page
            ];
        }

        $nodes = Utility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables, $this->defaultContextConfiguration);
        $nodeInfoHelper = new NodeInfoHelper();

        $result = [];
        foreach ($nodes as $node) {
            $nodeInfo = $nodeInfoHelper->renderNodeWithMinimalPropertiesAndChildrenInformation($node, $this->getControllerContext());
            $nodeInfo['properties']['_removed'] = $node->isRemoved();
            $nodeInfo['properties']['_hidden'] = $node->isHidden();
            $result[] = $nodeInfo;
        }
        $this->view->assign('value', $result);
    }

    /**
     * @param string $preset The preset, configured in Settings.yaml
     * @param string $nodeContextPath The context path of the node that will be available as `node` context var in Eel
     * @return void
     * @throws \Neos\Eel\Exception
     * @Flow\SkipCsrfProtection
     */
    public function getNewReferenceNodePathAction($preset, $nodeContextPath)
    {
        if (!isset($this->presets[$preset])) {
            throw new \Exception('Invalid preset name', 1660762934);
        }

        $baseNode = $this->nodeService->getNodeFromContextPath($nodeContextPath, null, null, true);

        if(isset($this->presets[$preset]['newReferenceNodePath'])) {
            $expression = '${' . $this->presets[$preset]['newReferenceNodePath'] . '}';
            $baseNode = $this->nodeService->getNodeFromContextPath($nodeContextPath, null, null, true);
            $contextVariables = [
                'node' => $baseNode,
                'site' => $baseNode
            ];
            $newReferenceNodePath = Utility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables, $this->defaultContextConfiguration);
        } else {
            $newReferenceNodePath = $baseNode;
        }

        $this->view->assign('value', $newReferenceNodePath);
    }
}
