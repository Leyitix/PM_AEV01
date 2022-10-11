import { Text, View } from "react-native";
import { useState } from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  NativeBaseProvider,
  Button,
} from "native-base";

export default function App() {
  let [pressed, setPressed] = useState();
  let elementsArray = [];

  // A IMPLEMENTAR POR EL ALUMNO //
  function handleOnPress(e) {
    elementsArray.push(e);

    let suma = 0;
    let number1 = parseInt(elementsArray[0]);
    let operador = elementsArray[1];
    let number2 = parseInt(elementsArray[2]);

    // if(e != "+" ||e != "-" ||e != "*" || e != "/") {
    //   let join = elementsArray.join('')
    //   alert(join)
    // } else {
    //   alert(e)
    // }

    if (e == "=") {
      if (elementsArray.length == 4 && elementsArray[1] == "+") {
        suma = number1 + number2;
        setPressed(suma);
      } else if (elementsArray.length == 4 && elementsArray[1] == "x") {
        multiplicacion = number1 * number2;
        setPressed(multiplicacion);
      } else if (elementsArray.length == 4 && elementsArray[1] == "-") {
        resta = number1 - number2;
        setPressed(resta);
      } else if (elementsArray.length == 4 && elementsArray[1] == "/") {
        division = number1 / number2;
        setPressed(division);
      }
    }
  }

  //*********/

  return (
    <NativeBaseProvider>
      <Center w="80%">
        <Box safeArea p="2" w="90%" maxW="290" py="5">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
            fontSize="48"
            fontWeight="semibold"
          >
            Calculadora
          </Heading>

          <VStack space={2} mt="5">
            <View
              style={{
                flexDirection: "row",
                marginBottom: -20,
                height: 70,
                width: 335,
                borderRadius: 4,
                borderWidth: 1,
              }}
            >
              <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>
                {pressed}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("1/X")}
                  size="20"
                  mt="5"
                  colorScheme="gray"
                >
                  {" "}
                  1/X{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("!")}
                  size="20"
                  mt="5"
                  colorScheme="gray"
                >
                  {" "}
                  !{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("√")}
                  size="20"
                  mt="5"
                  colorScheme="gray"
                >
                  {" "}
                  √{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("/")}
                  size="20"
                  mt="5"
                  colorScheme="gray"
                >
                  {" "}
                  /{" "}
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("7")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  7{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("8")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  8{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("9")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  9{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("x")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  x{" "}
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("4")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  4{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("5")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  5{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("6")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  6{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("-")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  -{" "}
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("1")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  1{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("2")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  2{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("3")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  3{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("+")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  +{" "}
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("C")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  C{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("0")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  0{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress(",")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  ,{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={() => handleOnPress("=")}
                  size="20"
                  mt="-1"
                  colorScheme="gray"
                >
                  {" "}
                  ={" "}
                </Button>
              </View>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
