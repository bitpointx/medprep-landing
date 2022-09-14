import { Box, IconButton, Snackbar, Typography } from "@mui/material";

const CloseSvg = () => (
  <svg
    width="13px"
    height="12px"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M8.5625 6L11.6875 2.875C12.0938 2.5 12.0938 1.875 11.6875 1.5L11 0.8125C10.625 0.40625 10 0.40625 9.625 0.8125L6.5 3.9375L3.34375 0.8125C2.96875 0.40625 2.34375 0.40625 1.96875 0.8125L1.28125 1.5C0.875 1.875 0.875 2.5 1.28125 2.875L4.40625 6L1.28125 9.15625C0.875 9.53125 0.875 10.1562 1.28125 10.5312L1.96875 11.2188C2.34375 11.625 2.96875 11.625 3.34375 11.2188L6.5 8.09375L9.625 11.2188C10 11.625 10.625 11.625 11 11.2188L11.6875 10.5312C12.0938 10.1562 12.0938 9.53125 11.6875 9.15625L8.5625 6Z"
      fill="#B00020"
    />
  </svg>
);

function ErorNotify({ open, handleError }: any) {
  // console.log("open is:-", open);
  return (
    <>
      <Snackbar
        open={open}
        onClose={handleError}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "355px",
            height: "44px",
            background: "#B00020",
            border: "1px solid #B00020",
            borderRadius: "4px",
            color: "#FFFFFF",
            lineHeight: "28px",
            fontWeight: 400,
          }}
        >
          <Typography>Invalid Token !!</Typography>
          <IconButton onClick={handleError} style={{ background: "#FFFFFF" }}>
            <CloseSvg />
          </IconButton>
        </Box>
      </Snackbar>
    </>
  );
}

export default ErorNotify;
