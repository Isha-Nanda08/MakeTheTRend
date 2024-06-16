import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem"; // Corrected import

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
    return 
        <Container>
            {categories.map(item => (
                    <CategoryItem item={item}/> // Added key prop
                ))
            }
            
        </Container>;
    ;
};

export default Categories;
