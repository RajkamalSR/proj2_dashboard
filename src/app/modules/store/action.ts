import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from './createAction';



@Injectable()
export class DocumentActions {

    static NTMR_STATE = 'NTMR_STATE';
    static TMR_STATE = 'TMR_STATE';

    constructor(public store: Store<DocumentState>) {

    }

    /**
     * This action will dispatch an action to fetch document data from server
     * 
     * @author Vijayan PP<vijayan.pp@pitsolutions.com>
    */
    public fetchNavbarData(): void {
        this.store.dispatch(createAction(DocumentActions.FETCH_DOCUMENT_NAVBAR_DATA));
    }

    /**
     * Action  to update the navigation bar(side menu)
     * @param data
     * 
     * @author Vijayan PP<vijayan.pp@pitsolutions.com>
     */
    public updateNavBar(data: Array<Object>) {
        this.store.dispatch(createAction(DocumentActions.UPDATE_DOCUMENT_NAVBAR, data));
    }

    /**
    * Action  to update the ag grid rows(mail folders)
    * @param data
    *
    * @author Vijayan PP<vijayan.pp@pitsolutions.com>
    */
    public updateDocumentsData(data: Array<Object>) {
        this.store.dispatch(createAction(DocumentActions.UPDATE_DOCUMENTS_DATA, data));
    }


    /**
    * Action to fetch ag grid row data

    * @author Vijayan PP<vijayan.pp@pitsolutions.com>
    */
    public fetchDocumentData(payload: Object): void {
        this.store.dispatch(createAction(DocumentActions.FETCH_DOCUMENTS_DATA, payload));
    }


    /**
     * This function will dispatch an action to show or hide detail panel
     * @param payload:
     *  
     * @author Vijayan PP<vijayan.pp@pitsolutions.com>
     */
    public updateDetailPanelOpen(payload: Object): void {
        this.store.dispatch(createAction(DocumentActions.UPDATE_DETAIL_PANEL_OPEN, payload));
    }





}
