# Azure PaaS Web Application — Assessment No. 5(2)

## Student
AJAGU NNAEMEKA LAWRENCE

## Live URL
https://paas-assessment-ajagu.azurewebsites.net

## Screenshots
See `/screenshots` folder for:
- Azure Portal App Service Overview page
- Environment variables (Configuration blade)

## Documentation
See `docs/summary.txt` for deployment details.

## Runtime Stack
Node.js 22 LTS + Express.js

## Deployment Method
GitHub integration via Azure Deployment Center
## Troubleshooting

| Issue | Solution |
|---|---|
| App shows default Azure page | Run `az webapp deployment source sync` to redeploy |
| Environment variables not loading | Check Azure Portal > Environment variables > Save & Restart |
| 503 Service Unavailable | App may be sleeping (Free tier). Wait 30 seconds and refresh |
| Deployment fails | Check Deployment Center > Logs for build errors |
| Port errors | Ensure app listens on `process.env.PORT`, not hardcoded 3000 |