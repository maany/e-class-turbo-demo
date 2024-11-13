
"use client"
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Download, RefreshCcw } from 'lucide-react';

interface RowData {
  id: number;
  name: string;
  age: number;
  profession: string;
}

const StyledAgGridPage = () => {
  const [rowData] = useState<RowData[]>([
    { id: 1, name: 'John Doe', age: 28, profession: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 32, profession: 'Doctor' },
    { id: 3, name: 'Alice Johnson', age: 24, profession: 'Designer' },
    { id: 4, name: 'Bob Lee', age: 29, profession: 'Artist' },
    { id: 5, name: 'Anna Brown', age: 35, profession: 'Teacher' },
  ]);

  const [columnDefs] = useState<ColDef<RowData>[]>([
    { 
      field: 'id', 
      headerName: 'ID', 
      maxWidth: 80,
      cellClass: 'font-medium'
    },
    { 
      field: 'name', 
      headerName: 'Name',
      cellClass: 'text-blue-600 font-medium'
    },
    { 
      field: 'age', 
      headerName: 'Age',
      cellClass: 'text-gray-600'
    },
    { 
      field: 'profession', 
      headerName: 'Profession',
      cellClass: 'text-gray-600'
    },
  ]);

  const defaultColDef: ColDef<RowData> = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 100,
  };

  const gridThemeOverrides = {
    '--ag-header-height': '48px',
    '--ag-header-background-color': '#f8fafc',
    '--ag-header-foreground-color': '#475569',
    '--ag-header-cell-hover-background-color': '#f1f5f9',
    '--ag-row-hover-color': '#f8fafc',
    '--ag-selected-row-background-color': '#e2e8f0',
    '--ag-font-size': '14px',
    '--ag-font-family': 'Inter, sans-serif',
  };

  return (
    <div className="p-6 w-full ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col gap-3" >
        {/* Header Section */}
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-tbase">Team Members</h2>
              <p className="mt-1 text-md text-tbase">
                Manage and view all team members in your organization
              </p>
            </div>
           
          </div>
        </div>

        {/* Grid Section */}
        <div className="pt-4">
          <div 
            className="ag-theme-alpine w-3/4"
            style={{ 
              height: '400px',
              
              ...gridThemeOverrides
            }}
          >
            <AgGridReact<RowData>
              
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={5}
              rowHeight={48}
              headerHeight={48}
              animateRows={true}
              rowSelection="multiple"
              suppressCellFocus={true}
              enableCellTextSelection={true}
              suppressMovableColumns={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledAgGridPage;