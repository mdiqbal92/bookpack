import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

//? Home Component //
const Home = ({navigation}) => {

   // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Dhaka",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Programing",
            // icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Thriller",
            // icon: icons.noodle,
        },
        {
            id: 3,
            name: "Travel",
            // icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Novel",
            // icon: icons.salad,
        },
        {
            id: 5,
            name: "Technology",
            // icon: icons.hamburger,
        },
        
    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Programming Choiddo Goshthi",
            rating: 4.8,
            categories: [1,5],
            priceRating: affordable,
            photo: images.programming,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Habluder jonno programming",
                    photo: images.programming2,
                    description: "Programming books for the beginners",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Programming er bolod to boss",
                    photo: images.programming3,
                    description: "Programming er bolod to boss the journey",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Recharge your down battery",
                    photo: images.programming4,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Travel",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.travel,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Journeys of a lifetime",
                    photo: images.travel1,
                    description: "Adventurous Lifetime journeys",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Wild by Nature",
                    photo: images.travel2,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tibbote soua bochor",
                    photo: images.travel3,
                    description: "Adventurous Journey at Tibbot",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Kinnor Deshe ",
                    photo: images.travel4,
                    description: "Kinnor desher adventure jatra",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Thriller Books",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.thriller,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Pishach bari",
                    photo: images.thriller1,
                    description: "Pishach Bari Rohosso",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Novel",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.novel,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Krishnopokkho",
                    photo: images.novel1,
                    description: "A famous novel by Humayun Ahmed",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Technology",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.technology,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Anuron Golok",
                    photo: images.technology1,
                    description: "Boost your brain..know the technology",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Hopotronik sukh dukkho",
                    photo: images.technology2,
                    description: "Stroy of robot who had feelings",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.technology3,
                    description: "Nayra, The mysterious girl ",
                    calories: 300,
                    price: 8
                },
                

            ]
        }
        
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


//? filter restaurant
function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    //? Get Category
        function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

//? header
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 ,marginTop:10}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                      
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

 
    function renderMainCategories () {
 
        //? Category
              const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        // padding: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.badge : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                       {/* Uncomment if need icons  */}
                    {/* <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
               
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View> */}
                    <Text
                        style={{
                            // marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

   

      return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h2 }}>Categories</Text>
                     <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
      )}

    //? restaurant list
      function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.badge,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h4, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        
     <SafeAreaView style={styles.container}>
         {renderHeader()}
         {renderMainCategories()}
           {renderRestaurantList()}
     </SafeAreaView>  
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})


export default Home;