import React from "react";
import Header from "../components/header";
import SearchInput from "../components/search-input";
import ToolBar from '@/app/components/toolbar'
import AddCompanyButton from "../components/add-company-button";
import CompanyTable from "../components/company-table";
import CompanyRow from "../components/company-row";
import { Status } from '@/app/components/status-label';
export interface PageProps{

}

export default function ({ }: PageProps) {
    return <>
        <header>Companies</header>
        <ToolBar action={<AddCompanyButton/>}>
            <SearchInput />
        </ToolBar>
        <CompanyTable>
            <CompanyRow id={1}
                category={'Products'}
                company={'Costco'}
                status={Status.Pending}
                promotion={true}
                country={'USA'}
                joineDate={'02.19.2013'} />
        </CompanyTable>
    </>
};
