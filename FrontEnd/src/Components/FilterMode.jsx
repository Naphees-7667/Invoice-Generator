import React, { useState } from 'react';
import { Button, Box, Flex } from '@chakra-ui/react';

const FilterMode = ({ filterInvoices }) => {
    const filterTypes = ['All', 'Draft', 'Pending', 'Paid'];
    const [selectedType, setSelectedType] = useState('All');

    const handleClick = (type) => {
        setSelectedType(type);
        filterInvoices(type === 'All' ? '' : type); // Apply filter or show all
    };

    return (
        <Box mx="auto" mb="24" bg="gray.200" rounded="lg">
            <Flex justify="center" align="center" flexWrap="wrap">
                {filterTypes.map((type, index) => (
                    <Button
                        key={index}
                        px="2"
                        fontWeight="700"
                        py="2"
                        m="2"
                        _hover={{
      background: selectedType === type 
        ? 'linear-gradient(to right, #8E54E9, #4776E6) text-transparent bg-clip-text' 
        : ''
    }}
                     className={`mx-2 my-2 px-6 py-2 tracking-wider ${
    selectedType === type
        ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'
        : 'text-black'
}`}

                        rounded="full"
                        variant={selectedType === type ? 'solid' : 'outline'}
                        colorScheme={selectedType === type ? 'purple' : 'gray'}
                        onClick={() => handleClick(type)}
                    >
                        {type}
                    </Button>
                ))}
            </Flex>
        </Box>
    );
};

export default FilterMode;
