import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export function DrawerContent(props){

    const [isLocalise,setIsLocalise]= React.useState(false)
    const toggleLocalisation =()=>{
        setIsLocalise(!isLocalise)
    }



    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>

 {/* ------------------ Ajout du profil -------------------- */}

        <View styles={styles.drawerContent}>
            <View style={styles.userInfoSection}>


                <View style={{flexDirection:"row"}}> 
                    <Avatar.Image
                        source={{
                            uri:'https://thumbs.dreamstime.com/b/jeunes-de-femme-de-profil-de-verticale-42706495.jpg'
                        }}
                        size={50}
                    />

                    <View style={{flexDirection:"column",marginLeft:15}}>
                        <Title style={styles.title}>Moi Meme</Title>
                        <Caption style={styles.caption}>@moimeme</Caption>
                    </View>
                </View>


            </View>

 {/* ------------------ Ajout des items du menu -------------------- */}

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                       
                       <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-group-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Vos Groupes"
                            onPress={() => {props.navigation.navigate('Activites')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Agendas des Sorties"
                            onPress={() => {props.navigation.navigate('EvenemtsList')}}
                        />
                    </Drawer.Section>
 {/* ------------------ Ajout localidation -------------------- */}

    <Drawer.Section title="Activer la localisation"> 
        <TouchableRipple onPress={()=>{toggleLocalisation()}}>
            <View style={styles.preference}>
                <Text> 
                    Afficher ma position ? 
                </Text>
                <View pointerEvents='none'>
                    <Switch value={isLocalise}/>
                </View>

            </View>
        </TouchableRipple>
    </Drawer.Section>


</View>


 {/* ------------------ Ajout du footer deconexion -------------------- */}

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    style={{
                        backgroundColor:"blue"
                    }}
                    icon={({color, size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={()=>{alert('hello')}}
                
                />

            </Drawer.Section>

            </DrawerContentScrollView>
        </View>
    )
}





const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingBottom:15,
      borderBottomColor:"grey" ,
      borderBottomWidth:2,
   },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 5,
        backgroundColor:"red",
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });