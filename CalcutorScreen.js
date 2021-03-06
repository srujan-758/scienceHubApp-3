import * as React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native'
import ActionButton from '../components/actionButton';

export default class CalculatorScreen extends React.Component{
    
    constructor(){
     super()
     this.setState={
       displayText:''  
     }
    }

   render(){
       return(
           <View>
               <View style={styles.calculator}>
                 <View style={styles.output}>
                  <Text style={styles.outputText}>{this.state.displayText}</Text>    
                 </View> 

                 <View style={styles.buttonRow}>
                    <ActionButton
                        name="+/-"
                        style="other"
                        onPress={()=>{
                        this.negativeOrPositive()   
                    }}
                    />

                    <ActionButton
                        name="C"
                        style="other"
                        onPress={()=>{
                        this.clear()   
                    }}
                    />                     
                     
                     <ActionButton
                        name="()"
                        style="other"
                        onPress={()=>{
                        this.addItemToDisplay("()")   
                    }}
                    />

                     <ActionButton
                        name="÷"
                        style="operation"
                        onPress={()=>{
                        this.addItemToDisplay("÷")   
                    }}
                    />

                  </View>

                  <View style={styles.buttonRow}>

                    <ActionButton
                        name="7"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("7")   
                    }}
                    />

                    <ActionButton
                        name="8"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("8")   
                    }}
                    />

                    <ActionButton
                        name="9"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("9")   
                    }}
                    />

                    <ActionButton
                        name="x"
                        style="operation"
                        onPress={()=>{
                        this.addItemToDisplay("x")   
                    }}
                    />

                  </View>

                  <View style={styles.buttonRow}>
                   
                  <ActionButton
                        name="4"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("4")   
                    }}
                    />

                    <ActionButton
                        name="5"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("5")   
                    }}
                    />

                    <ActionButton
                        name="6"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("6")   
                    }}
                    />

                    <ActionButton
                        name="-"
                        style="operation"
                        onPress={()=>{
                        this.addItemToDisplay("-")   
                    }}
                    />

                  </View>

                  <View>
                  <ActionButton
                        name="1"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("1")   
                    }}
                    />
                    
                    <ActionButton
                        name="2"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("2")   
                    }}
                    />

                    <ActionButton
                        name="3"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("3")   
                    }}
                    />

                    <ActionButton
                        name="+"
                        style="operation"
                        onPress={()=>{
                        this.addItemToDisplay("+")   
                    }}
                    />

                  </View>

                  <View>
                  <ActionButton
                        name="0"
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay("0")   
                    }}
                    />

                    <ActionButton
                        name="."
                        style="number"
                        onPress={()=>{
                        this.addItemToDisplay(".")   
                    }}
                    /> 

                    <ActionButton
                        name="="
                        style="operation"
                        onPress={()=>{
                        this.solve()   
                    }}
                    />

                  </View>

             </View>
            </View>    
            )

    }
    
}

const styles=StyleSheet.create({
    buttonRow:{
      display:'flex',
      flexDirection:'row',   
    },

    calculator:{
     backgroundColor:'#2ECC71',
     borderColor:'#E74C3C',
     borderWidth:10,
     borderRadius:40,
     alignSelf:'center',
     padding:5,
     width:"100%",
     height:"10%"
    },
    
    output:{
     backgroundColor:'#85C1E9',
     height:60,
     width:"100%",
     marginTop:"3%",
     marginBottom:"4%",
     justifyContent:'center'   
    },

    outputText:{
        color:'black',
        marginLeft:5,
        fontSize:40,
        textAlign:'center'
    }
})