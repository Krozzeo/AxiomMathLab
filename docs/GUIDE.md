# Math Lab P5 guide

1. Extract the complete combined ZIP, keeping Platform, Engine and Math Lab as siblings. Double-click **Start Axiom.cmd** and leave its console open.
2. Hub → New project → **Axiom Math Lab**. Enter a name and Create and open.
3. Three seeded calculations appear. Change `radius = 3` to `radius = 4`, leave the field and inspect area. Invalid input such as `1/0` shows a cell error. Correct it, click Save.
4. Close the session from its Hub row. Its editor tab must become disconnected and block input. Double-click the project row to reopen: the same tab reconnects with saved calculations.
5. Single click selects a row; active sessions have a subtle tint/dot. Repeated Open must not create a second editor. The folder icon opens its local folder.
6. Platform → Settings → AI Agent: connect/test your own key. This connection test and later generation can be billable. Keys are not persisted. Enter a compatible model available to your account in Math Lab's **Project model**; Save stores that project preference.
7. Ask `Set radius to six and add the circumference`. Prepare proposal. Existing calculation cells must stay unchanged while proposed differences appear. **Review changes** enables **Apply reviewed proposal**; Apply persists the accepted result. Discard/Cancel do not alter MAIN. A stale or externally changed document must reject Apply.
8. Export document opens the modern Windows Save dialog. Cancel must create no file. A saved exported document can be added through Hub → Add project → file picker; originals are preserved outside project storage.
9. Close the session, click its Delete icon and inspect the reviewed folder. Cancel retains files; Confirm moves them to the Recycle Bin. Remove from list only forgets the catalog entry.

The automated P5 browser test uses a controlled provider and verifies both real products together; it does not establish real-model quality or GPU performance. Test real accounts and native interactive Open/Save dialogs separately. The proof of concept does not implement symbolic math, matrices or plots.
