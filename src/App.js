import './App.css';

      import { Flex, Box,Heading,Spacer,ButtonGroup,Button,Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'

function App() {
  return (

      <div className='App'>
    

      
       <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'><Breadcrumb spacing='8px' >
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></Heading>


  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex> 

      </div>
 
  );
}

export default App;
