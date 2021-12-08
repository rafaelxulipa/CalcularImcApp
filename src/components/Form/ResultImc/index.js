import React from "react"
import { View, Text, Share, TouchableOpacity } from "react-native"
import styles from "./style"

export default function ResultImc(props){
    
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    let classification = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade 1", "Obesidade 2", "Obesidade Mórbida"]
    let resultado = props.resultImc

    function tiposImc() {
        
        if (resultado < 18.5) {
            return classification[0]
        } else if(resultado >= 18.5 && resultado <= 24.9) {
            return classification[1]
        }else if(resultado >= 25 && resultado <= 29.9) {
            return classification[2]
        }else if(resultado >= 30 && resultado <= 34.9) {
            return classification[3]
        }else if(resultado >= 35 && resultado <= 39.9) {
            return classification[4]
        }else if(resultado >= 40) {
            return classification[5]
        }
    }

    return(
        <View style={styles.contextImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Text style={styles.information}>Sua classificação é {tiposImc()}</Text>
            <View style={styles.boxSharedButton}>
                {props.resultImc != null ? <TouchableOpacity  onPress={onShare} style={styles.shared}><Text style={styles.sharedText}>Share</Text></TouchableOpacity> : <View/>}
            </View>
        </View>
    );
}