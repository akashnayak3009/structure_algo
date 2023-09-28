import React, {useState} from 'react'
import explorer from './data/folderData'
import Folder from './components/Folder';
import './File.css'
import useTraverseTree from './hooks/use-traverse-tree';

const File = () => {
    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode} = useTraverseTree();

    const handleInsertNode =(folderId, item, isFolder)=>{
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };
  
  return (
    <div>
        <Folder handleInsertNode={ handleInsertNode } explorer={explorerData}/>
    </div>
  )
}

export default File