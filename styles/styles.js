import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    // koko app
    container: {
        flex: 1,
        backgroundColor: '#CFB9A5',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column'
    },

    //header.js
    //header-laatikko
    header: {
        fontSize: 30,
        marginBottom: 15,
        flex: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#E8CCBF',
        textAlignVertical: 'center',
        padding: 15,
        border: 'dashed',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#81968F'
    },
    //otsikko
    jatsi: {
        fontSize: 36,
        fontFamily: 'Monospace',
        textDecorationLine: 'underline',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#81968F',
        textShadowColor: '#96BDC6',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 5
    },

    // gameboard.js
    gameboard: {
        flex: 2,
        width: '90%',
        height: '100%',
        border: 'dashed',
        borderLeftColor: '#E8CCBF',
        borderTopColor: '#E8CCBF',
        borderRightColor: '#E8CCBF',
        borderBottomColor: 'transparent',
        borderWidth: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 50,
        padding: 25,
        textAlign: 'center'
      },
      button: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#81968F',
        width: '50%',
        alignSelf: 'center',
        padding: 7,
        borderRadius: 15
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Monospace',
        textShadowColor: '#96BDC6',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 5
    },
    dice: {
        width: 80,
        height: 30,
        marginTop: 10,
        marginBottom: 15,
        marginRight: '40%',
        flexDirection: "row",
        alignSelf: 'center'
    },
    boxu: {
        magin: 15,
        padding: 15
    },

    //footer.js
    footer: {
        flex: 2,
        justifyContent: 'flex-end',
        height: 20
    },
    footerText: {
        color: '#E6EBE0'
    }
});