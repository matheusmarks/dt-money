import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenSectionModal: () => void;
}

export function Header({ onOpenSectionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenSectionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}