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
  let [number, setNumber] = useState();
  let [numberOne, setNumberOne] = useState();
  let [numberTwo, setNumberTwo] = useState();
  let [oldNumber, setOldNumber] = useState();
  let [calculo, setCalculo] = useState();
  let [operador, setOperador] = useState();

  // A IMPLEMENTAR POR EL ALUMNO //
  function equalOnPress() {
    setNumber(calculo);
  }

  function numberOnPress(e) {
    setNumber();

    if (number == undefined) {
      number = e;
      setNumber(number);
      oldNumber = number;
      setOldNumber(oldNumber);
      numberOne = oldNumber;
      setNumberOne(numberOne);
      console.log("oldnumber:", numberOne);
    } else {
      if (operador == undefined) {
        number = e;
        let num1 = String(oldNumber);
        let num2 = String(number);
        let numeros = num1 + num2;
        let numerosFloat = parseFloat(numeros);
        setNumber(numerosFloat);
        numberOne = numerosFloat;
        setNumberOne(numberOne);
        console.log("handler number", numberOne);
      } else {
        numberTwo = e;
        setNumber(numberTwo);
        setNumberTwo(numberTwo);
        console.log("Numero 2: ", numberTwo);

        if (operador == "+") {
          sumar();
        } else if(operador == "-"){
          console.log("hola");
        }

      }
    }
  }

  function signOnPress(e) {
    let operador = e;
    setOperador(operador);
    console.log(operador);
  }

  function numeroInverso() {
    let calculo = 1 / number;
    setCalculo(calculo);
  }

  function factorialNumero() {
    let calculo = 0;
    if (number === 0 || number === 1) {
      calculo = 1;
    }
    for (let i = number - 1; i >= 1; i--) {
      calculo = number *= i;
    }
    setCalculo(calculo);
  }

  function raizCuadrada() {
    let calculo = Math.sqrt(number);
    setCalculo(calculo);
  }

  function sumar() {
    operador = "+";
    setOperador(operador);
    let suma = 0;

    if (numberTwo != undefined) {
      let num1 = parseFloat(numberOne);
      console.log("number ONE in suma", num1);

      let num2 = parseFloat(numberTwo);
      console.log("number TWO in suma", num2);

      suma = num1 + num2;
      setCalculo(suma);
      console.log("Suma: " + suma);
    } else {
      let num1 = numberOne;
      console.log("number ONE in suma", num1);
    }
  }

  function resetOnPress() {
    number = undefined;
    setNumber(number);
    numberOne = undefined;
    setNumberOne(numberOne);
    numberTwo = undefined;
    setNumberTwo(numberTwo);
    calculo = undefined;
    setCalculo(calculo);
    oldNumber = undefined;
    setOldNumber(oldNumber);
    operador = undefined;
    setOperador(operador);
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
                {number}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={numeroInverso}
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
                  onPress={factorialNumero}
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
                  onPress={raizCuadrada}
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
                  onPress={() => signOnPress("/")}
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
                  onPress={() => numberOnPress("7")}
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
                  onPress={() => numberOnPress("8")}
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
                  onPress={() => numberOnPress("9")}
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
                  onPress={() => signOnPress("x")}
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
                  onPress={() => numberOnPress("4")}
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
                  onPress={() => numberOnPress("5")}
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
                  onPress={() => numberOnPress("6")}
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
                  onPress={() => signOnPress("-")}
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
                  onPress={() => numberOnPress("1")}
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
                  onPress={() => numberOnPress("2")}
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
                  onPress={() => numberOnPress("3")}
                  size="20"
                  mt="-1"
                  colorScheme="blue"
                >
                  {" "}
                  3{" "}
                </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={sumar} size="20" mt="-1" colorScheme="gray">
                  {" "}
                  +{" "}
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button
                  onPress={resetOnPress}
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
                  onPress={() => numberOnPress("0")}
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
                  onPress={equalOnPress}
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
