const Router = require('express-promise-router');
const router = new Router();

const { listSummaries, createSummary, getChartSummary, getReportSummary } = require('../controllers/report-summary');

const { validateListSummaryAPI, validateCreateSummaryAPI, setApiResponseId } = require('../middlewares');

module.exports = router;

router.post("/list",
    setApiResponseId("api.report.summary.list"),
    validateListSummaryAPI,
    listSummaries
);

router.post("/create",
    setApiResponseId("api.report.summary.create"),
    validateCreateSummaryAPI,
    createSummary
);

router.get("/:reportid",
    setApiResponseId("api.report.summary.get"),
    getReportSummary
)

router.get("/:reportid/:chartid",
    setApiResponseId("api.report.summary.get"),
    getChartSummary
)
