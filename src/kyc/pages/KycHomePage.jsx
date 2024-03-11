import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import { useNavigate } from "react-router"
import kycStartImg from "../../assets/kyc-start.png"
import { useSelector } from "react-redux"
import { kycRoutes } from "../../routes/kycRoutes"
const KycHomePage = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const formNature = useSelector((state) => state.user?.nature)
  const clientType = useSelector((state) => state.user?.clientType)
  const currentFormStep = useSelector((state) => state.user?.currentForm)

  const formLabel =
    formNature === "DP" ? "DEMAT" : formNature === "TMS" ? "TMS" : ""
  const routeList = kycRoutes()

  const handleStartRegistration = () => {
    if (formNature === "DP") {
      if (clientType === "I") {
        navigate("/kyc/demat-registration/i/basic-details")
      } else {
        navigate("/kyc/demat-registration/c/corporate-details")
      }
    } else {
      if (clientType === "I") {
        navigate("/kyc/tms-registration/i/basic-details")
      } else {
        navigate("/kyc/tms-registration/c/corporate-details")
      }
    }
  }

  const handleContinueRegistration = () => {
    if (routeList && currentFormStep > 0) {
      let path = ""
      const page = routeList.find((item) => item.id === currentFormStep)
      path = page.path
      if (formNature === "TMS") {
        path.replace("demat-registration", "tms-registration")
      }
      navigate(`/kyc/${path}`)
    }
  }

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Start {formLabel} Registration
        </Typography>
      </Box>

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "40px 0",
            }}
          >
            <img src={kycStartImg} alt="kyc-start" />
          </div>
          {currentFormStep > 0 ? (
            <>
              <Typography variant="p" fontWeight={700}>
                Please, click here to continue your registration
              </Typography>
              <Button
                variant="contained"
                fullWidth={false}
                onClick={handleContinueRegistration}
              >
                Continue Registration
              </Button>
            </>
          ) : (
            <>
              <Typography variant="p" fontWeight={700}>
                Please, click here to start your registration
              </Typography>
              <Button
                variant="contained"
                fullWidth={false}
                onClick={handleStartRegistration}
              >
                Start Registration
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default KycHomePage
