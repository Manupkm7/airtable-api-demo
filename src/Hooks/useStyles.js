import { useTheme } from "@mui/material";
import { isFunction } from "lodash";
import { useMemo } from "react";

const useStyles = (styles, props = {}) => {
  const theme = useTheme();

  const data = useMemo(() => {
    if (!isFunction(styles)) {
      return styles;
    }

    return styles({ theme, ...props });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, Object.values(props));

  return data;
};

export default useStyles;