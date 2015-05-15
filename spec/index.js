import jasmine from "jasmine";
import jasmineHtml from "jasmineHtml";
import jasmineBoot from "jasmineBoot";

import MessageSpec from "parsers/MessageSpec";
import SubjectSpec from "parsers/SubjectSpec";
import HasSubjectSpec from "rules/HasSubjectSpec";
import SquashedCommitsSpec from "rules/SquashedCommitsSpec";
import SubjectFormatSpec from "rules/SubjectFormatSpec";

if (typeof window !== undefined) window.onload();
