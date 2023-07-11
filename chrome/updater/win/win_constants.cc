// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/updater/win/win_constants.h"

namespace updater {

const wchar_t kLegacyGoogleUpdaterAppID[] =
    L"{a04d6beb-0b7f-4e98-ae2f-b52c5c591675}";

const wchar_t kGlobalPrefix[] = L"Global\\G";

// TODO(crbug.com/1097297): need to add branding support.
const wchar_t kPrefsAccessMutex[] = L"{764e0958-587b-41aa-a3af-aff426181971}";

const wchar_t kRegKeyCommands[] = L"Commands";
const wchar_t kRegValueCommandLine[] = L"CommandLine";
const wchar_t kRegValueAutoRunOnOSUpgrade[] = L"AutoRunOnOSUpgrade";

const wchar_t kRegValuePV[] = L"pv";
const wchar_t kRegValueBrandCode[] = L"brand";
const wchar_t kRegValueAP[] = L"ap";
const wchar_t kRegValueName[] = L"name";
const wchar_t kRegValueUninstallCmdLine[] = L"UninstallCmdLine";

const wchar_t kRegValueInstallerError[] = L"InstallerError";
const wchar_t kRegValueInstallerExtraCode1[] = L"InstallerExtraCode1";
const wchar_t kRegValueInstallerProgress[] = L"InstallerProgress";
const wchar_t kRegValueInstallerResult[] = L"InstallerResult";
const wchar_t kRegValueInstallerResultUIString[] = L"InstallerResultUIString";
const wchar_t kRegValueInstallerSuccessLaunchCmdLine[] =
    L"InstallerSuccessLaunchCmdLine";

const wchar_t kRegKeyCompanyCloudManagement[] =
    COMPANY_POLICIES_KEY L"CloudManagement\\";
const wchar_t kRegValueEnrollmentToken[] = L"EnrollmentToken\\";

const wchar_t kRegValueEnrollmentMandatory[] = L"EnrollmentMandatory";

const wchar_t kRegKeyCompanyEnrollment[] = COMPANY_KEY L"Enrollment\\";
const wchar_t kRegValueDmToken[] = L"dmtoken";

const wchar_t kWindowsServiceName[] = L"Service";
const wchar_t kWindowsInternalServiceName[] = L"InternalService";

const wchar_t kShutdownEvent[] = L"{a3ae06b5-0784-4ea3-b35b-a023a475f356}";

const wchar_t kLegacyExeName[] = L"DecentrUpdate.exe";

}  // namespace updater
