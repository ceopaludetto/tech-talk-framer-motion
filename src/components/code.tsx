import { Box, IconButton, Snackbar, Tooltip, Typography, useTheme } from "@mui/material";
import Highlight, { Language, defaultProps } from "prism-react-renderer";
import { useCallback, useState } from "react";

import { Copy } from "lucide-react";
import { prismTheme } from "~/utils/prism-theme";

export type ICodeProps = {
  language: Language;
  children: string;
};

export function Code({ children, language }: ICodeProps) {
  const theme = useTheme();
  const [snackbar, setSnackbar] = useState(false);

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(children);
    setSnackbar(true);
  }, [children]);

  const code = children.replace(/\n.*$/, "");

  return (
    <>
      <Box
        sx={{
          mx: -3,
          mt: 2,
          position: "relative",
          backgroundColor: "background.item",
          "&:hover > div": { opacity: 1 },
        }}
      >
        <Box sx={{ overflowX: "auto" }}>
          <Highlight {...defaultProps} theme={prismTheme(theme)} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Typography className={className} component="pre" sx={{ py: 1 }} style={style}>
                {tokens.map((line, i) => (
                  <Box sx={{ display: "table-row" }} key={i} {...getLineProps({ line, key: i })}>
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{ display: "table-cell", px: 1, userSelect: "none", fontFamily: "'Roboto Mono'" }}
                    >
                      {i + 1}
                    </Typography>
                    <Typography component="span" sx={{ display: "table-cell", fontFamily: "'Roboto Mono'" }}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </Typography>
                  </Box>
                ))}
              </Typography>
            )}
          </Highlight>
        </Box>
        <Box sx={{ position: "absolute", right: 0, top: 0, opacity: 0, pt: 0.9, pr: 0.9 }}>
          <Tooltip describeChild title="Copiar">
            <IconButton color="primary" size="small" onClick={handleCopyToClipboard}>
              <Copy size={20} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Snackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        autoHideDuration={2000}
        message="Copiado para área de trabalho!"
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      />
    </>
  );
}
