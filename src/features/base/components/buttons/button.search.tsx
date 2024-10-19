import { InputAdornment, TextField } from "@mui/material";
import { UserItem } from "../items/user";
import { LineMdPersonSearch } from "../../icons/nav";

export function SearchInput() {
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [results, setResults] = useState<UserEntity[]>([]);

    // useEffect(() => {
    //     const fetchResults = async () => {
    //         if (searchTerm) {
    //             try {
    //                 const response = await apiV1.get(`/search/users?query=${searchTerm}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${Cookies.get('token')}`
    //                     }
    //                 });
    //                 setResults(response.data);
    //             } catch (error) {
    //                 console.error("Error fetching search results:", error);
    //             }
    //         } else {
    //             setResults([]);
    //         }
    //     };

    //     const debounceFetch = setTimeout(fetchResults, 300);

    //     return () => clearTimeout(debounceFetch);
    // }, [searchTerm]);

    return (
        <>
            <TextField
                variant="filled"
                placeholder="Search Users"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LineMdPersonSearch />
                        </InputAdornment>
                    ),
                }}
                fullWidth
                sx={{ mb: 2, backgroundColor: 'background.default' }}
            />
            <UserItem />
        </>
    );
}
