module.exports = {
    aor: {
        action: {
            delete: 'Löschen',
            show: 'Anzeigen',
            list: 'Liste',
            save: 'Speichern',
            create: 'Erstellen',
            edit: 'Bearbeiten',
            cancel: 'Abbrechen',
            refresh: 'Aktualisieren',
            add_filter: 'Filter hinzufügen',
            remove_filter: 'Filter entfernen',
            back: 'Zurück'
        },
        boolean: {
            true: 'Ja',
            false: 'Nein',
        },
        page: {
            list: '%{name} Liste',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} erstellen',
            delete: '%{name} #%{id} löschen',
            dashboard: 'Dashboard',
            not_found: 'Nicht Gefunden'
        },
        message: {
            yes: 'Ja',
            no: 'Nein',
            are_you_sure: 'Sind Sie sicher?',
            about: 'Über',
            not_found: 'Diese Seite wurde nicht gefunden. Bitte überprüfen Sie ob der URL stimmt.'
        },
        input: {
            file: {
                upload_several: 'Legen Sie die hochzuladenden Dateien hier ab, oder klicken Sie, um eine Datei auszuwählen.',
                upload_single: 'Legen Sie die hochzuladende Datei hier ab, oder klicken Sie, um eine Datei auszuwählen.',
            },
            image: {
                upload_several: 'Legen Sie die hochzuladenden Bilder hier ab, oder klicken Sie, um ein Bild auszuwählen.',
                upload_single: 'Legen Sie das hochzuladende Bild hier ab, oder klicken Sie, um ein Bild auszuwählen.',
            },
        },
        navigation: {
            no_results: 'Keine Ergebnisse gefunden',
            page_out_of_boundaries: 'Die Seite %{page} liegt außerhalb des gültigen Bereichs',
            page_out_from_end: 'Kann nicht nach der letzten Seite gehen',
            page_out_from_begin: 'Kann nicht vor die erste Seite gehen',
            page_range_info: '%{offsetBegin}-%{offsetEnd} von %{total}',
            next: 'Weiter',
            prev: 'Zurück',
        },
        auth: {
            username: 'Benutzername',
            password: 'Passwort',
            sign_in: 'Anmelden',
            sign_in_error: 'Fehler bei der Anmeldung, bitte erneut versuchen',
            logout: 'Abmelden',
        },
        notification: {
            updated: 'Element wurde aktualisiert',
            created: 'Element wurde erstellt',
            deleted: 'Element wurde gelöscht',
            item_doesnt_exist: 'Das Element existiert nicht',
            http_error: 'Fehler beim kommunizieren mit dem Server'
        },
        validation: {
            required: 'Benötigt',
            minLength: 'Muss mindestens %{min} Zeichen lang sein',
            maxLength: 'Muss %{max} oder weniger Zeichen lang sein',
            minValue: 'Muss mindestens %{min} sein',
            maxValue: 'Muss %{max} oder weniger sein',
            number: 'Muss eine Zahl sein',
            email: 'Muss eine gültige E-Mail Addresse sein',
        },
    },
};
