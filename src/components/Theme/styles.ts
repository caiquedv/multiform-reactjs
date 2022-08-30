import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044a;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;

    @media (max-width: 370px) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195C;

    @media (max-width: 370px) {
        width: 90%;
    }
`;

export const Page = styled.div`
    flex: 1;
    padding: 40px;
    padding-bottom: 0;

    @media (max-width: 500px) {
        padding: 10px;
    }
`;