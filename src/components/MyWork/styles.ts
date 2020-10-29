import styled from 'styled-components';

import { Wrapper } from '../../styles/shared/Wrapper';
import myWorkBackground from '../../assets/images/mywork-bg.png';

export const MyWorkWrapper = styled(Wrapper)`
    background-image: url('${myWorkBackground}');

    @media only screen and (max-width: 670px) {
        padding: 60px 30px;
        flex-direction: column;

        .checkout-text {
            text-align: center;
            margin: 0px 0px 36px 0px;
        }
    }
`;
