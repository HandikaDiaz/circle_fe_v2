import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ThreadItem } from "../../items/thread";
import { UserItem } from "../../items/user";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

export function FollowTab() {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box mt={2} px={3} pb={2} alignItems="center" justifyContent="center">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                textColor="inherit"
                TabIndicatorProps={{
                    style: { height: '2px', backgroundColor: 'MuiButton.root', borderRadius: '1px' },
                }}
            >
                <Tab label="Followers" />
                <Tab label="Following" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <UserItem />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserItem />
            </TabPanel>
        </Box>
    );
}
