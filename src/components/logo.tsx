import { Glass, IGlassProps } from "./glass";

export type ILogoProps = IGlassProps;

export function Logo({ children, sx, ...rest }: ILogoProps) {
  return (
    <Glass
      sx={{
        backgroundColor: "background.item",
        borderRadius: "50%",
        p: 2,
        display: "inline-flex",
        alignItems: "center",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Glass>
  );
}
