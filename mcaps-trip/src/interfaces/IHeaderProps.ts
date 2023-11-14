interface IHeaderProps {
    title?: string;
    setTitle?: ((title: string) => void) | undefined
    setPage?: ((page: number) => void) | undefined;
    withSearchField?: boolean;

  }

  export default IHeaderProps;