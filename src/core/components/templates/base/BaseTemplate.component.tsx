import * as S from './BaseTemplate.styles';

export interface BaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <S.Container>{sampleTextProp}</S.Container>;
};

export default BaseTemplate;
