declare module "board-lukuku" {
  export function SayHello(name: string): Promise<any>;
  export function RichEditor(
    handleContent: (content: any) => void
  ): Promise<any>;
}
