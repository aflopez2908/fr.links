/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack>
  <Avatar size={`xl`} src={`/avatar.png`} sx={{"fallback": "RX", "border": "4px"}}/>
  <VStack sx={{"marginRigth": "1em", "color": "#e3e8e3"}}>
  <Heading size={`xl`} sx={{"color": "#e3e8e3", "fontFamily": "Workbench", "marginLeft": "3rem", "border": "4px", "padding": "1rem"}}>
  {`Felipe Russi`}
</Heading>
  <HStack>
  <Link as={NextLink} href={`https://www.instagram.com/felipe_23_14/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`/instagram.svg`} sx={{"width": "1em", "marginLeft": "2em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/felipe_23_14/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`/facebook.svg`} sx={{"width": "1em", "marginLeft": "2em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/felipe_23_14/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`/tiktok.svg`} sx={{"width": "1em", "marginLeft": "2em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/felipe_23_14/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`/x.svg`} sx={{"width": "1em", "marginLeft": "2em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%", "color": "#e3e8e3", "fontFamily": "VT323", "fontSize": "1.4rem", "marginBotton": "1rem!important"}}>
  <Box sx={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold"}}>
  {`+2`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold"}}>
  {`2`}
</Text>
  {` carreras estudiadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold"}}>
  {`+10`}
</Text>
  {` proyectos en proceso`}
</Box>
</Flex>
  <VStack sx={{"textAlign": "justify", "fontFamily": "VT323", "fontSize": "1.5em"}}>
  <Text sx={{"color": "#e3e8e3"}}>
  {`mi nombre es felipe russi y soy un estudiante de ingenieria de sistemas que no le gusta esperar a aprender en
                la universidad asi que quizo aprender por si solo durante toda una vida`}
</Text>
</VStack>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "fontFamily": "MyFont2", "color": "#e3e8e3"}}>
  {`Laboral`}
</Heading>
  <Link as={NextLink} href={`https://www.linkedin.com/in/alvaro-felipe-lopez-russi-3a76521a1/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/linkelnd.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`likelind`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`Un poco de mi vida laboral`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/aflopez2908`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/github.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`mira mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`##`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/portafolio.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`Portafolio`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`Conoceme un poco mejor`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`/hoja de vida alvaro felipe lopez russi .pdf`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/cv.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`CV`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`Conoce mi experiencia a fondo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "fontFamily": "MyFont2", "color": "#e3e8e3"}}>
  {`Contactame`}
</Heading>
  <Link as={NextLink} href={`mailto:aflopezrussi@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/email.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`aflopezrussi@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://wa.me/573052374118`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"display": "inline", "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "#e3e8e3", "color": "#00000", "whiteSpace": "normal", "_hover": {"backgroundColor": "#f3890e"}}}>
  <HStack>
  <ChakraImage src={`/whatsapp.svg`} sx={{"margin": "0.8em", "width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "fontFamily": "Workbench"}}>
  {`Whatsapp`}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "VT323"}}>
  {`Escribeme con respuesta casi inmediata`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"margin": "2em", "color": "#f2ecdf", "fontFamily": "VT323"}}>
  <Text sx={{"size": "lg", "color": "#e3e8e3", "fontFamily": "Workbench", "fontSize": "2em", "border": "4px", "padding": "1rem"}}>
  {`F R`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`©Todos los derechos reservados`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`una pagina hecha con amor <3`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Felipe Russi center`}
</title>
  <meta content={`Soy ingeniero y economista en formaciòn`} name={`description`}/>
  <meta content={`avatar.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
