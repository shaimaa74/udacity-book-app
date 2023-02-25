interface imageLinks {
    smallThumbnail?: string;
    thumbnail?: string
}

interface panelizationSummary {
    containsEpubBubbles?: boolean;
    containsImageBubbles?: boolean;
}

interface readingModes {
    text?: boolean;
    image?: boolean;
}

interface industryId {
    type?: string;
    identifier?: string;
}

export interface BookItemModel {
    id: string;
    title: string;
    authors?: string[];
    imageLinks: imageLinks;
    shelf: string;
    subtitle?: string;
    description?: string;
    publisher?: string;
    publishedDate?: string;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
    panelizationSummary?: panelizationSummary;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    pageCount?: number;
    printType?: string;
    categories?: string[];
    readingModes?: readingModes;
    industryIdentifiers?: industryId[];
}

export interface BooksModel {
    books: BookItemModel[];   
}