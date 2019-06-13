import Styled from 'styled-components'

export default Styled.div`
    h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    .user-list {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;
        li {
            cursor: pointer;
            font-size: 2rem;
            background-color: #ccc;
            color: #222;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-align: center;
            &:hover {background-color: #fff}
        }
    }
`