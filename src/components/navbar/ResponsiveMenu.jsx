import React, { useEffect, useState } from "react";
import {
  ListItem,
  Typography,
  useTheme,
  useMediaQuery,
  List,
  Collapse,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ResponsiveNavMenu = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    navItem,
    isMenuOpen,
    handleActiveClick,
    handleToggle,
    symbols,
    handelScriptChange,
    scriptValue,
  } = props;
  const [menuOpen, setmenuOpen] = useState(false);
  const { pathname = "" } = useLocation();
  const isScreenSizeSM = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setmenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setmenuOpen(false);
    handleToggle(false);
  }, [isScreenSizeSM]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Collapse in={menuOpen && isScreenSizeSM}>
      <div
        style={{
          display: "flex",
          padding: "16px",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          <Autocomplete
            name="script"
            fullWidth
            options={symbols}
            getOptionLabel={(option) => option?.companyInfo}
            value={scriptValue ? scriptValue : null}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder={t("Company name or symbol")}
                variant="outlined"
                autoFocus
                size="small"
                InputLabelProps={{ shrink: true }}
                style={{ minWidth: "150px" }}
              />
            )}
            onChange={(event, value) => {
              if (value) {
                handelScriptChange(value);
                handleActiveClick(`/company/${value?.symbol}`);
              }
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {navItem?.map((items) => (
            <List key={items?.id} sx={{ position: "relative" }}>
              <ListItem sx={{ position: "relative" }}>
                <Typography
                  onClick={() => handleActiveClick(items?.path)}
                  sx={{
                    cursor: "pointer",
                    color:
                      pathname === items?.path
                        ? theme.palette.text.main
                        : theme.palette.text.main,
                    fontWeight: pathname === items.path ? "bold" : "normal",
                  }}
                  variant="h6"
                >
                  {t(items?.item)}
                  {pathname === items?.path && (
                    <div
                      style={{
                        position: "absolute",
                        width: "50%",
                        height: "0.1rem",
                        background: "blue",
                      }}
                    ></div>
                  )}
                </Typography>
              </ListItem>
            </List>
          ))}
        </div>
      </div>
    </Collapse>
  );
};

export default ResponsiveNavMenu;
