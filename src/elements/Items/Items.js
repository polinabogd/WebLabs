import Eminem from '../../images/eminem.jpg';
import Miley from '../../images/miley.jpg';
import Kendrick from '../../images/kendrick.jpg';
import {ItemsWrapper, ItemWrapper, Image, TextWrapper, Label, Text} from './Items.styles';

export function Items() {
    return (
        <div>
            <ItemsWrapper>
                <ItemWrapper>
                    <Image src={Eminem}/>
                    <TextWrapper>
                        <Label>Eminem</Label>
                        <Text>Without me</Text>
                    </TextWrapper>
                </ItemWrapper>
                <ItemWrapper>
                    <Image src={Miley}/>
                    <TextWrapper>
                        <Label>Miley Cyrus</Label>
                        <Text>Mothers daughter</Text>
                    </TextWrapper>
                </ItemWrapper>
                <ItemWrapper>
                    <Image src={Kendrick}/>
                    <TextWrapper>
                        <Label>Kendrick Lamar</Label>
                        <Text>Humble </Text>
                    </TextWrapper>
                </ItemWrapper>
            </ItemsWrapper>
        </div>
    );
}