import { useEffect, useRef, useState } from "react";
import fadeStyle from './log.module.css'
import { addZero } from "../utils/utils";

type LogMessage = {
    id: number;
    hour: string;
    message: string;
    type: 'info' | 'error' | 'warning';
  };

export default function Log(){
    
    const [logs, setLogs] = useState<LogMessage[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);  // Ref da div    

    useEffect(() => {
      const interval = setInterval(() => {
        const date = new Date();
        const hour = addZero(date.getHours());
        const min = addZero(date.getMinutes());
        const sec = addZero(date.getSeconds());

        const newLog: LogMessage = {
          id: Date.now(),
          hour: hour +":"+ min +":"+ sec,
          message: getLogMsg(),
          type: getLogType(),
        };
        setLogs((prevLogs) => [...prevLogs, newLog]);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }        
      }, [logs]);

    const getLogMsg = () => {
        const messages = [
          'System',
          'Not Found',
          'Make me sad',
          'Make me mad',
          'You can say hi',
          'Make my day',
          'I lay down my life for you',
          'Vulgar display of power',
          "Ain't is funny",
          'Forefeeling',
          'Things to do',
          'Broken Machine',
          'Nothing',
          '{}',
          'Weregild',
          'Reborn Ice Horn',
        ];
        return messages[Math.floor(Math.random() * messages.length)];
      };

      const getLogType = (): 'info' | 'error' | 'warning' => {
        const types: ('info' | 'error' | 'warning')[] = ['info', 'error', 'warning'];
        return types[Math.floor(Math.random() * types.length)];
      };      

      const renderLogs = () => {
        return logs.map((log) => (
          <p key={log.id} className={`log ${log.type}`}>
            {log.hour} [{log.id}] - [{log.type}] - {log.message}
          </p>
        ));
      };      

    return(
        <div className={`text-white ${fadeStyle.terminal} `} ref={messagesEndRef}>
            {renderLogs()}
        </div>
    )    
}