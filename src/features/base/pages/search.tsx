import { Box } from "@mui/material";
import { SearchInput } from "../components/buttons/button.search";

export function SearchPage() {
    return (
        <Box
            mt={2}
            px={3}
            pb={2}
            alignItems="center"
            justifyContent="center"
        >
            <SearchInput />
        </Box>
    );
}
