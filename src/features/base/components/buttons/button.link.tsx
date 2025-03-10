import { Link as MLink, LinkProps as MLinkProps } from "@mui/material";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";

type ButtonLinkProps = MLinkProps & RRLinkProps & { children: React.ReactNode };

export function ButtonLink({ children, to, ...props }: ButtonLinkProps) {
    return (
        <MLink
            component={RRLink}
            to={to}
            {...props}
            sx={{
                textDecoration: 'none',
                transition: 'color 0.2s ease-in-out',
                ":hover": {color: 'primary.main'}
            }}
        >
            {children}
        </MLink>
    );
}
