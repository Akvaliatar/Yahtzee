import { StyleSheet } from "react-native";

export const OgTheme = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        marginTop: 100,
        marginBottom: 30
    },
    button: {
        marginTop: 30,
        marginBottom: 30
    },
    flex: {
        flexDirection: 'row'
    },
    dice: {
        width: 80,
        height: 80,
        marginTop: 30,
        marginBottom: 15,
        marginRight: 10
    },
    sum: {
        fontSize: 20
    }
});

//tähän voi nyt lisätä lisää teemoja