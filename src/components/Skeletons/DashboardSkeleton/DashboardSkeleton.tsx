import {
  Wrapper,
  FormTitle,
  Input,
  Button,
  Form,
  InfoBlock,
  QuoteBlock,
} from './styled';

const DashboardSkeleton = () => {
  return (
    <Wrapper>
      <Form>
        <FormTitle />
        <Input />
        <Input />
        <Button />
      </Form>
      <InfoBlock />
      <QuoteBlock />
    </Wrapper>
  );
};

export default DashboardSkeleton;
