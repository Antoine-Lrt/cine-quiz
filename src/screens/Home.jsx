import { StyleSheet, View, ImageBackground,  } from 'react-native'
import React from 'react'
import Button from '../components/atoms/Button'




const Home = () => {

  


  return (
    <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../../assets/images/home.png')}
    >

    <View style={styles.homeContainer}>

        <Button />

    </View>

    </ImageBackground>

        


  )
}


export default Home

const styles = StyleSheet.create({


  homeContainer:{
    position: 'absolute',
    left:    90,
    top:      230,
  },
  
  
  imgBackground: {
    flex: 1,
    
},
    
  // homeImg: {
  //   width: 300,
  //   height: 400,
  //   resizeMode: 'contain',
  //   marginBottom: 100,
  // },

  

})