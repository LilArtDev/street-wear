import * as S from './BaseTemplate.styles';

export const TEST_ID = '';

export type BaseTemplateProps = React.HTMLAttributes<HTMLDivElement> & {
  size: 'default' | 'large';
};

export const BaseTemplate: React.FC<BaseTemplateProps> = ({
  children,
  ...props
}) => {
  return (
    <S.Container {...props} data-testid={TEST_ID}>
      {children}
    </S.Container>
  );
};
