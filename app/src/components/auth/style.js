import Styled from 'styled-components'

export default Styled.div`
    .form {
        display: grid;
        width: 100%;
        max-width: 333px;
        grid-auto-flow: row;
        grid-gap: 1rem;
        
        h1 {
            font-size: 2.4rem;
            text-align: center;
        }
        button {cursor: pointer}
        input, button {
            background-color: rgba(250,250,250,.72);
            color: #222;
            font-size: 1.8rem;
            height: 4rem;
            padding: 1rem;
            border-radius: 5px;
            width: 100%;
            &:hover {background-color: rgba(250,250,250,.99)}
        }
    }
`