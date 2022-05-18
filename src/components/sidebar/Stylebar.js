import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: "rgba(35, 47, 62, 1)",
        display: "flex",
        justifyContent: "space-between"
    },
    account: {
        display: "none",
        alignItems: "center",
        [theme.breakpoints.up("md")]:{
            display: "flex",
        },
    },
    account2:{
        display: "block",
        [theme.breakpoints.up("md")]:{
            display: "none",
        },
    },
    item:{
        display:"flex",
        alignSelf: "center",
        marginTop: theme.spacing(4)
    },
    item2:{
        display:"flex",
        alignSelf: "center",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
}));

export default useStyles;