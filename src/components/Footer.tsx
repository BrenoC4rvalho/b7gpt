import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
    disabled: boolean
    onSendMessage: (message: string) => void;
}

export const Footer = ({ onSendMessage, disabled }:Props) => {
    return (
        <footer className="w-full border border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput 
                    disabled={disabled}
                    onSend={onSendMessage}
                />
                <div className="pt-3 text-center text-xs text-gray-300" >
                    Feito pela B7Web.
                    <a href="https://b7web.com">Quer aprender programar? Clique aqui</a>
                </div>
            </div>

        </footer>
    )
}