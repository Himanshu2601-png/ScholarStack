import React from 'react';
import { FileText, Download, Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export interface FileData {
  id: string;
  uploader_name: string;
  file_name: string;
  file_url: string;
  file_type: string;
  department: string;
  semester: number;
  subject: string;
  upload_date: string;
}

const FileCard: React.FC<{ file: FileData }> = ({ file }) => {
  const getFileIcon = () => {
    if (file.file_type.includes('pdf')) return <FileText className="h-8 w-8 text-red-500" />;
    if (file.file_type.includes('word') || file.file_name.endsWith('.docx')) return <FileText className="h-8 w-8 text-blue-500" />;
    if (file.file_type.includes('presentation') || file.file_name.endsWith('.ppt') || file.file_name.endsWith('.pptx')) return <FileText className="h-8 w-8 text-orange-500" />;
    return <FileText className="h-8 w-8 text-gray-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            {getFileIcon()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-1" title={file.file_name}>
              {file.file_name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                {file.subject}
              </span>
              <span>•</span>
              <span>Sem {file.semester}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="truncate max-w-[100px]">{file.uploader_name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{formatDistanceToNow(new Date(file.upload_date), { addSuffix: true })}</span>
          </div>
        </div>
        
        <a
          href={file.file_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-md transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>View / Download</span>
        </a>
      </div>
    </div>
  );
}

export default FileCard;
