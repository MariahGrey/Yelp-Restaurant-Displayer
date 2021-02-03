import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList title="Cheap Skate" results={filterResultsByPrice('$')} />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$')} />
                <ResultsList title="You Fancy" results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    }
});

export default SearchScreen;