import React from 'react'
import {View, Text} from 'react-native'
import estilo from '../components/estilo'

// export default ({num = 0}) => {
//     if(num % 2 === 0){
//         return(
//             <View>
//                 <Text style={estilo.txtG}>O numero {num} é:</Text>
//                 <Text style={estilo.txtG}>Par</Text>
//             </View>
//         )
//     }else{
//         return(
//             <View>
//                 <Text style={estilo.txtG}>O numero {num} é:</Text>
//                 <Text style={estilo.txtG}>Impar</Text>
//             </View>
//         )    
//     }

// }
export default ({num = 0}) => {
    return(
        <View>
            <Text style={estilo.txtG}>O Numero {num} é:</Text>
            {num % 2 == 0 
            ? <Text style={estilo.txtG}>Par</Text> 
            : <Text style={estilo.txtG}>Impar</Text>
            }
            
        </View>
    )
}
// export default props => {
//     return(
//         <View>
//             <Text style={estilo.txtG}>O Numero {props.num} é:</Text>
//             {props.num % 2 == 0 
//             ? <Text style={estilo.txtG}>Par</Text> 
//             : <Text style={estilo.txtG}>Impar</Text>
//             }
            
//         </View>
//     )
// }